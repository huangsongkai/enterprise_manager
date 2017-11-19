package com.example.demo.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

/**
 * Created by huang on 2017/11/13.
 */
@Controller
public class InputsDirectoryController {
    @GetMapping("/inputsDirectory")
    public String badRequest(){
        return"inputsDirectory/inputsDirectory";
    }
}
