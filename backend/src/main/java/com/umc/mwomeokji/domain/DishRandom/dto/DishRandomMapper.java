package com.umc.mwomeokji.domain.DishRandom.dto;

import com.umc.mwomeokji.domain.DishRandom.dto.DishRandomDto.*;
import com.umc.mwomeokji.domain.dish.domain.Dish;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring")
public interface DishRandomMapper {
    DishRandomResponse toDishRandomResponse(Dish dishRandom);
}
