package CnamBeirut.C2plaintes.repository;

import CnamBeirut.C2plaintes.entity.Citoyen;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

    @Repository
    public interface CitoyenRepository extends JpaRepository<Citoyen, Integer> {

        public boolean existsByTelephonec(String t);

        public List<Citoyen> findByTelephonec(String t);

        @Query("select max(c.id) from Citoyen c")
        public Integer findMaxId();
    }
