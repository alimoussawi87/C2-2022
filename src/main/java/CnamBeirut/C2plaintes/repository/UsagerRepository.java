package CnamBeirut.C2plaintes.repository;

import CnamBeirut.C2plaintes.entity.Usager;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface UsagerRepository extends JpaRepository<Usager, Integer> {

    public boolean existsByUsageru(String usageru);

    public List<Usager> findByUsageru(String usageru);

    @Query("select max(u.id) from Usager u")
    public Integer findMaxId();


}

