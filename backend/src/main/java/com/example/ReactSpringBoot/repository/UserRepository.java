package com.example.ReactSpringBoot.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.example.ReactSpringBoot.model.User;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {

}
