package com.ats.security.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.ats.security.entity.Register;


public interface RegisterRepo extends JpaRepository<Register,Integer> {

}