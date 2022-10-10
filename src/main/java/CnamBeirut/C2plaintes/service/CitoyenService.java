package CnamBeirut.C2plaintes.service;

import CnamBeirut.C2plaintes.entity.Citoyen;
import CnamBeirut.C2plaintes.repository.CitoyenRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
public class CitoyenService {

        @Autowired
        private CitoyenRepository citoyenRepository;

        @Transactional
        public String createCitoyen(Citoyen citoyen){
            try {
                if (!citoyenRepository.existsByTelephonec(citoyen.getTelephonec())){
                    citoyen.setId(null == citoyenRepository.findMaxId()? 0 : citoyenRepository.findMaxId() + 1);
                    citoyenRepository.save(citoyen);
                    return "lA citoyen est créé..";
                }else {
                    return "lA citoyen déjà existé  dans la base de données.";
                }
            }catch (Exception e){
                throw e;
            }
        }

        public List<Citoyen> lireCitoyens(){
            return citoyenRepository.findAll();
        }

        @Transactional
        public String updateCitoyen(Citoyen citoyen){
            if (citoyenRepository.existsByTelephonec(citoyen.getTelephonec())){
                try {
                    java.util.List<Citoyen> citoyens = citoyenRepository.findByTelephonec(citoyen.getTelephonec());
                    citoyens.stream().forEach(s -> {
                        Citoyen citoyenToBeUpdate = citoyenRepository.findById(s.getId()).get();
                        citoyenToBeUpdate.setNomc(citoyen.getNomc());
                        citoyenToBeUpdate.setPrenomc(citoyen.getPrenomc());
                        citoyenToBeUpdate.setTelephonec(citoyen.getTelephonec());
                        citoyenToBeUpdate.setLocationc(citoyen.getLocationc());
                        citoyenToBeUpdate.setDatec(citoyen.getDatec());
                        citoyenRepository.save(citoyenToBeUpdate);
                    });
                    return "Le citoyen "+citoyen.getPrenomc()+citoyen.getNomc()+" a été mise à jour.";
                }catch (Exception e){
                    throw e;
                }
            }else {
                return "la citoyen n'existe pas dans la base de données.";
            }
        }

        @Transactional
        public String deleteCitoyen(Citoyen citoyen){
            if (citoyenRepository.existsByTelephonec(citoyen.getTelephonec())){
                try {
                    java.util.List<Citoyen> citoyens;
                    citoyens = citoyenRepository.findByTelephonec(citoyen.getTelephonec());
                    citoyens.stream().forEach(s -> {
                        citoyenRepository.delete(s);
                    });
                    return "la citoyen de "+citoyen.getPrenomc()+citoyen.getNomc()+" a été supprimée avec succès";
                }catch (Exception e){
                    throw e;
                }

            }else {
                return "la citoyen n'existe pas dans la base de données.";
            }
        }
    }


