package CnamBeirut.C2plaintes.entity;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class Usager {

    @Id
    private int id;
    private  String section;
    private String usagernom;
    private String usageru;
    private String usagerpass;

    public Usager() {
    }

    public int getId() {
        return id;
    }

    public String getSection() {
        return section;
    }

    public String getUsagernom() {
        return usagernom;
    }

    public String getUsageru() {
        return usageru;
    }



    public String getUsagerpass() {
        return usagerpass;
    }

    public void setId(int id) {
        this.id = id;
    }

    public void setSection(String section) {
        this.section = section;
    }

    public void setUsagernom(String usagernom) {
        this.usagernom = usagernom;
    }

    public void setUsageru(String usageru) {
        this.usageru = usageru;
    }
    public void setUsagerpass(String usagerpass) {
        this.usagerpass = usagerpass;
    }

    @Override
    public String toString() {
        return "Usagers{" +
                "id=" + id +
                ", section='" + section+
                ", usagernom='" + usagernom + '\'' +
                ", usageru='" + usageru+ '\'' +
                ", usagerpass='" + usagerpass + '\'' +
                '}';
}}
