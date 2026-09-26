package com.cognevance.portfolio.repository;

import com.cognevance.portfolio.entity.ContactMessage;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ContactMessageRepository extends JpaRepository<ContactMessage, Long> {
    // JpaRepository already gives us save(), findAll(), findById(), deleteById(), etc.
}
