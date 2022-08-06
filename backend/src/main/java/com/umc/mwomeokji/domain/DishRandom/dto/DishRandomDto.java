package com.umc.mwomeokji.domain.DishRandom.dto;

import lombok.Getter;
import lombok.RequiredArgsConstructor;

public class DishRandomDto {

    @Getter
    @RequiredArgsConstructor
    public static class DishRandomResponse{
        private final Long id;
        private final String name;
    }
}
