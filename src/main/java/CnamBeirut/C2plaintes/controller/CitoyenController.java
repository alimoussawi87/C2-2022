package CnamBeirut.C2plaintes.controller;

import CnamBeirut.C2plaintes.entity.Citoyen;
import CnamBeirut.C2plaintes.service.CitoyenService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;



@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class CitoyenController {
    @Autowired
    private CitoyenService citoyenService;


    @RequestMapping(value = "citoyend", method = RequestMethod.GET)
    public String citoyend() {
        return "On commence...";
    }


    @RequestMapping(value = "createCitoyen", method = RequestMethod.POST)
    public String createCitoyen(@RequestBody Citoyen citoyen) {
        return citoyenService.createCitoyen(citoyen);
    }

    @RequestMapping(value = "lireCitoyens", method = RequestMethod.GET)
    public List<Citoyen> lireCitoyens() {
        return citoyenService.lireCitoyens();
    }

    @RequestMapping(value = "updateCitoyen", method = RequestMethod.PUT)
    public String updateCitoyen(@RequestBody Citoyen citoyen) {
        return citoyenService.updateCitoyen(citoyen);
    }

    @RequestMapping(value = "deleteCitoyen", method = RequestMethod.DELETE)
    public String deleteCitoyen(@RequestBody Citoyen citoyen) {
        return citoyenService.deleteCitoyen(citoyen);
    }

}