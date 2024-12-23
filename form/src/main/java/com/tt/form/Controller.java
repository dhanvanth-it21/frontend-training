package com.tt.form;

import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/form")
public class Controller {

    @PostMapping("/submit")
    public Map<String, Object> submit(@RequestParam Map<String, Object> form) {

        Map<String, Object> response = new HashMap<>();

        response.put("name", form.get("name"));
        response.put("dob", form.get("dob"));

        Map<String, Object> user = new HashMap<>();
        user.put("firstName", form.get("firstName"));
        user.put("lastName", form.get("lastName"));
        response.put("user", user);


        Map<String, Object> address = new HashMap<>();
        address.put("place", form.get("place"));
        address.put("district", form.get("district"));
        address.put("state", form.get("state"));
        address.put("country", form.get("country"));
        address.put("pincode", form.get("pincode"));
        response.put("address", address);

        response.put("phone", form.get("phone"));
        response.put("email", form.get("email"));
        response.put("gender", form.get("gender"));


        return response;
    }
}
