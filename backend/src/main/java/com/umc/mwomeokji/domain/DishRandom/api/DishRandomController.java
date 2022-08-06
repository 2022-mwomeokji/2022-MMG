package com.umc.mwomeokji.domain.DishRandom.api;


import com.umc.mwomeokji.domain.DishRandom.application.DishRandomService;
import com.umc.mwomeokji.domain.DishRandom.dto.DishRandomDto.*;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import static org.springframework.http.HttpStatus.OK;

@RequiredArgsConstructor
@RequestMapping("/dishes")
@RestController
public class DishRandomController {

    private final DishRandomService dishRandomService;

    @GetMapping("/random")
    public ResponseEntity<DishRandomResponse> getDishRandom(){
        return ResponseEntity.status(OK).body(dishRandomService.getRandomDish());
    }
}
