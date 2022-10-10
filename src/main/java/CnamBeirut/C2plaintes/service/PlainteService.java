package CnamBeirut.C2plaintes.service;

import CnamBeirut.C2plaintes.entity.Plainte;
import CnamBeirut.C2plaintes.repository.PlainteRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
public class PlainteService {

    @Autowired
    private PlainteRepository plainteRepository;

    @Transactional
    public String createPlainte(Plainte plainte){
        try {
            if (!plainteRepository.existsById(plainte.getId())){
                plainte.setId(null == plainteRepository.findMaxId()? 0 : plainteRepository.findMaxId() + 1);
                plainteRepository.save(plainte);
                return "lA plainte est créé..";
            }else {
                return "lA plainte déjà existé  dans la base de données.";
            }
        }catch (Exception e){
            throw e;
        }
    }

    public List<Plainte> lirePlaintes(){
        return plainteRepository.findAll();
    }

    @Transactional
    public String updatePlainte(Plainte plainte){
        if (plainteRepository.existsByPnbr(plainte.getPnbr())){
            try {

                java.util.List<Plainte> plaintes = plainteRepository.findByPnbr(plainte.getPnbr());
                plaintes.stream().forEach(s -> {
                    Plainte plainteToBeUpdate = plainteRepository.findById(s.getId()).get();
                    plainteToBeUpdate.setCitid(plainte.getCitid());
                    plainteToBeUpdate.setDatep(plainte.getDatep());
                    plainteToBeUpdate.setPnbr(plainte.getPnbr());
                    plainteToBeUpdate.setLocationp(plainte.getLocationp());
                    plainteToBeUpdate.setDetails1(plainte.getDetails1());
                    plainteToBeUpdate.setDetails2(plainte.getDetails2());
                    plainteToBeUpdate.setDetails3(plainte.getDetails3());
                    plainteToBeUpdate.setResultat1(plainte.getResultat1());
                    plainteToBeUpdate.setResultat2(plainte.getResultat2());
                    plainteToBeUpdate.setResultat3(plainte.getResultat3());
                    plainteToBeUpdate.setValeur(plainte.getValeur());
                    plainteRepository.save(plainteToBeUpdate);
                });
                return "La plainte du citoyen qui a l'id"+plainte.getCitid()+" a été mise à jour.";
            }catch (Exception e){
                throw e;
            }
        }else {
            return "la plainte n'existe pas dans la base de données.";
        }
    }

    @Transactional
    public String deletePlainte(Plainte plainte){
        if (plainteRepository.existsByPnbr(plainte.getPnbr())){
            try {
                java.util.List<Plainte> plaintes;
                plaintes = plainteRepository.findByPnbr(plainte.getPnbr());
                plaintes.stream().forEach(s -> {
                    plainteRepository.delete(s);
                });
                return "la plainte du citoyen qui a l'id"+plainte.getCitid()+" a été supprimée avec succès";
            }catch (Exception e){
                throw e;
            }

        }else {
            return "la plainte n'existe pas dans la base de données.";
        }
    }
}
