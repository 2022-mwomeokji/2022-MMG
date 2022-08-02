package com.umc.mwomeokji.domain.question.dto;

import com.umc.mwomeokji.domain.dish.dto.DishDto;
import lombok.Getter;
import lombok.RequiredArgsConstructor;

import java.util.List;

public class QuestionDto {

    @Getter
    @RequiredArgsConstructor
    public static class QuestionsNameResponse {
        private final String question;
    }

    @Getter
    @RequiredArgsConstructor
    public static class QuestionAndDishesResponse {
        private final String question;
        private final List<DishDto.DishesNameResponse> dishesNameResponseList;
    }
}
