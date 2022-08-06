package com.umc.mwomeokji.domain.DishRandom.application;


import com.umc.mwomeokji.domain.DishRandom.dto.DishRandomDto.*;

public interface DishRandomService {

    DishRandomResponse getRandomDish();         //랜덤으로 지정하기 때문에 여기서 id를 안넣어도 된다고 생각함
}
