package com.umc.mwomeokji.domain.dish.dish.dto;

import com.umc.mwomeokji.domain.dish.dish.domain.Dish;
import com.umc.mwomeokji.domain.dish.dish.dto.DishDto.*;
import org.mapstruct.Mapper;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

@Mapper(componentModel = "spring")
public interface DishMapper {

    Dish toEntity(DishPostRequest dishPostRequest, String imageUrl);

    default List<Dish> toEntityList(List<DishPostRequest> dishPostRequests, List<String> images) {
        List<Dish> dishesList = new ArrayList<>();
        for (int i = 0; i < dishPostRequests.size(); i++){
            dishesList.add(toEntity(dishPostRequests.get(i), images.get(i)));
        }
        return dishesList;
    }

    DishNameResponse toDishNameResponse(Dish dish);

    default List<DishNameResponse> toDishNameResponseList(List<Dish> dish) {
        return dish.stream().map(entity -> toDishNameResponse(entity)).collect(Collectors.toList());
    }

    default DishDetailsResponse toDishDetailsResponse(Dish dish) {
        return new DishDetailsResponse(
                dish.getId(),
                dish.getName(),
                dish.getCategory().getCategory(),
                dish.getImageUrl(),
                dish.getVideoUrl1(),
                dish.getVideoUrl2(),
                dish.getVideoUrl3()
        );
    }

    DishesCountResponse toDishesCountResponse(Long count);
}
