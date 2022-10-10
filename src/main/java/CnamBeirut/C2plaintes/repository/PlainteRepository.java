package CnamBeirut.C2plaintes.repository;

import CnamBeirut.C2plaintes.entity.Plainte;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface PlainteRepository extends JpaRepository <Plainte, Integer> {

    public boolean existsByPnbr(String pnbr);

    public List<Plainte> findByPnbr(String pnbr);

    @Query("select max(p.id) from Plainte p")
    public Integer findMaxId();
}
