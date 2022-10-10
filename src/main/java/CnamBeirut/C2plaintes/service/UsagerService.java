package CnamBeirut.C2plaintes.service;

import CnamBeirut.C2plaintes.entity.Usager;
import CnamBeirut.C2plaintes.repository.UsagerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
public class UsagerService {

    @Autowired
    private UsagerRepository usagerRepository;

    @Transactional
    public String createUsager(Usager usager){
        try {
            if (!usagerRepository.existsByUsageru(usager.getUsageru())){
                usager.setId(null == usagerRepository.findMaxId()? 0 : usagerRepository.findMaxId() + 1);
                usagerRepository.save(usager);
                return "l'usager est créé..";
            }else {
                return "l'usager déjà existé  dans la base de données.";
            }
        }catch (Exception e){
            throw e;
        }
    }

    public List<Usager> lireUsagers(){
        return usagerRepository.findAll();
    }

    @Transactional
    public String updateUsager(Usager usager){
        if (usagerRepository.existsByUsageru(usager.getUsageru())){
            try {
                java.util.List<Usager> usagers = usagerRepository.findByUsageru(usager.getUsagernom());
                usagers.stream().forEach(s -> {
                    Usager usagerToBeUpdate = usagerRepository.findById(s.getId()).get();
                    usagerToBeUpdate.setSection(usager.getSection());
                    usagerToBeUpdate.setUsagernom(usager.getUsagernom());
                    usagerToBeUpdate.setUsageru(usager.getUsageru());
                    usagerToBeUpdate.setUsagerpass(usager.getUsagerpass());
                    usagerRepository.save(usagerToBeUpdate);
                });
                return "La usager de la section"+usager.getSection()+":"+usager.getUsagernom()+" a été mise à jour.";
            }catch (Exception e){
                throw e;
            }
        }else {
            return "la usager n'existe pas dans la base de données.";
        }
    }

    @Transactional
    public String deleteUsager(Usager usager){
        if (usagerRepository.existsByUsageru(usager.getUsageru())){
            try {
                java.util.List<Usager> usagers;
                usagers = usagerRepository.findByUsageru(usager.getUsageru());
                usagers.stream().forEach(s -> {
                    usagerRepository.delete(s);
                });
                return "l' usager de "+usager.getUsagernom()+" a été supprimée avec succès";
            }catch (Exception e){
                throw e;
            }

        }else {
            return "la usager n'existe pas dans la base de données.";
        }
    }
}
