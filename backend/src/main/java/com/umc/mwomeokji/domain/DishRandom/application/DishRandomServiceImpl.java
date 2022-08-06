package com.umc.mwomeokji.domain.DishRandom.application;


import com.umc.mwomeokji.domain.DishRandom.domain.DishRandom;
import com.umc.mwomeokji.domain.DishRandom.dto.DishRandomDto.*;
import com.umc.mwomeokji.domain.DishRandom.dto.DishRandomMapper;
import com.umc.mwomeokji.domain.dish.dao.DishRepository;
import com.umc.mwomeokji.domain.dish.domain.Dish;
import com.umc.mwomeokji.domain.dish.exception.NotFoundDishException;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Random;

@RequiredArgsConstructor
@Transactional
@Service
public class DishRandomServiceImpl implements DishRandomService {

    private final DishRepository dishRepository;
    private final DishRandomMapper dishRandomMapper;


    @Override
    @Transactional(readOnly = true)
    public DishRandomResponse getRandomDish(){
        long qty = dishRepository.count();      //id의 갯수를 파악하는데 count()안에 id를 집어넣어야하는지 아닌지 모르겠음
        long idx = (long)(Math.random() * qty);

        return dishRandomMapper.toDishRandomResponse(
                dishRepository.findById(idx)
                        .orElseThrow(NotFoundDishException::new)
        );
    }
}
