package CnamBeirut.C2plaintes.entity;
import javax.persistence.Entity;
import javax.persistence.Id;
import java.util.Date;

@Entity
public class Citoyen {
    @Id
    private int id;
    private String nomc;
    private String prenomc;
    private String telephonec;
    private String locationc;
    private Date datec;

    public Citoyen() {
    }

    public int getId() {
        return id;
    }

    public String getNomc() {
        return nomc;
    }

    public String getPrenomc() {
        return prenomc;
    }

    public String getTelephonec() {
        return telephonec;
    }

    public String getLocationc() {
        return locationc;
    }

    public Date getDatec() {
        return datec;
    }



    public void setId(int id) {
        this.id = id;
    }

    public void setNomc(String nomc) {
        this.nomc = nomc;
    }

    public void setPrenomc(String prenomc) {
        this.prenomc = prenomc;
    }

    public void setTelephonec(String telephonec) {
        this.telephonec = telephonec;
    }

    public void setLocationc(String locationc) {
        this.locationc= locationc;
    }

    public void setDatec(Date datec) {
        this.datec = datec;
    }

    @Override
    public String toString() {
        return "Citoyenes{" +
                "id=" + id +
                ", nomc='" + nomc + '\'' +
                ", prenomc='" + prenomc + '\'' +
                ", telephonec='" + telephonec + '\'' +
                ", locationc='" + locationc + '\'' +
                ", datec=" + datec+
                '}';
    }
}



