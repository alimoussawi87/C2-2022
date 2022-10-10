package CnamBeirut.C2plaintes.entity;

import javax.persistence.*;
import java.util.Date;


@Entity
public class Plainte {

    @Id
    private int id;
    private int citid;

    private String pnbr;
    private Date datep;
    private String locationp;
    private String details1;
    private String details2;
    private String details3;
    private String resultat1;
    private String resultat2;
    private String resultat3;
    private String valeur;

    public Plainte() {
    }

    public int getId() {
        return id;
    }

    public int getCitid() {
        return citid;
    }

    public String getPnbr() {
        return pnbr;
    }

    public Date getDatep() {
        return datep;
    }

    public String getLocationp() {
        return locationp;
    }

    public String getDetails1() {
        return details1;
    }

    public String getDetails2() {
        return details2;
    }

    public String getDetails3() {
        return details3;
    }

    public String getResultat1() {
        return resultat1;
    }

    public String getResultat2() {
        return resultat2;
    }

    public String getResultat3() {
        return resultat3;
    }

    public String getValeur() {
        return valeur;
    }

    public void setId(int id) {
        this.id = id;
    }

    public void setCitid(int citid) {
        this.citid = citid;
    }

    public void setPnbr(String pnbr) {
        this.pnbr = pnbr;
    }

    public void setDatep(Date datep) {
        this.datep = datep;
    }

    public void setLocationp(String locationp) {
        this.locationp = locationp;
    }

    public void setDetails1(String details1) {
        this.details1 = details1;
    }

    public void setDetails2(String details2) {
        this.details2 = details2;
    }

    public void setDetails3(String details3) {
        this.details3 = details3;
    }

    public void setResultat1(String resultat1) {
        this.resultat1 = resultat1;
    }

    public void setResultat2(String resultat2) {
        this.resultat2 = resultat2;
    }

    public void setResultat3(String resultat3) {
        this.resultat3 = resultat3;
    }

    public void setValeur(String valeur) {
        this.valeur = valeur;
    }

    @Override
    public String toString() {


        return

                "Plaintes{" +
                "id=" + id +
                ", citid='" + citid + '\'' +
                ", pnbr='" + pnbr + '\'' +
                ", datep='" + datep + '\'' +
                ", locationp='" + locationp + '\'' +
                ", details1='" + details1 + '\'' +
                ", details2='" + details2 + '\'' +
                ", details3='" + details3 + '\'' +
                ", resultat1='" + resultat1 + '\'' +
                ", resultat2='" + resultat2 + '\'' +
                ", resultat3='" + resultat3 + '\'' +
                        ", valeur=" + valeur+
                '}';
    }
}
