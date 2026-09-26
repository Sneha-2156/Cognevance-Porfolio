package com.cognevance.portfolio.controller;

import com.cognevance.portfolio.entity.ContactMessage;
import com.cognevance.portfolio.service.ContactMessageService;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "*") // tighten this to your deployed frontend domain in production
public class ContactController {

    private final ContactMessageService service;

    @Autowired
    public ContactController(ContactMessageService service) {
        this.service = service;
    }

    // POST /api/contact  -> called by the React contact form
    @PostMapping("/contact")
    public ResponseEntity<?> submitContact(@Valid @RequestBody ContactMessage message) {
        ContactMessage saved = service.save(message);
        return ResponseEntity.status(HttpStatus.CREATED)
                .body(Map.of("status", "success", "id", saved.getId()));
    }

    // GET /api/contact -> lets you (the admin) view submitted messages
    @GetMapping("/contact")
    public List<ContactMessage> getAllMessages() {
        return service.findAll();
    }

    // Simple health check, handy for deployment platforms like Render/Railway
    @GetMapping("/health")
    public Map<String, String> health() {
        return Map.of("status", "ok");
    }
}
