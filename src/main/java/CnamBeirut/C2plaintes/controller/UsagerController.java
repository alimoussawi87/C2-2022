package CnamBeirut.C2plaintes.controller;

import CnamBeirut.C2plaintes.entity.Usager;
import CnamBeirut.C2plaintes.service.UsagerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:4200")

public class UsagerController {
    @Autowired
    private UsagerService usagerService;

    @RequestMapping(value = "usageri", method = RequestMethod.GET)
    public String usageri(){
        return "On commence...";
    }


    @RequestMapping(value = "createusager", method = RequestMethod.POST)
    public String createUsager(@RequestBody Usager usager){
        return usagerService.createUsager(usager);
    }

    @RequestMapping(value = "lireUsagers", method = RequestMethod.GET)
    public List<Usager> lireUsagers(){
        return usagerService.lireUsagers();
    }

    @RequestMapping(value = "updateUsager", method = RequestMethod.PUT)
    public String updateUsager(@RequestBody Usager usager){
        return usagerService.updateUsager(usager);
    }

    @RequestMapping(value = "deleteUsager", method = RequestMethod.DELETE)
    public String deleteUsager(@RequestBody Usager usager){
        return usagerService.deleteUsager(usager);
    }

    }

