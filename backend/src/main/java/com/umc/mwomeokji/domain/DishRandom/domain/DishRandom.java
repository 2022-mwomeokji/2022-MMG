package com.umc.mwomeokji.domain.DishRandom.domain;

import com.umc.mwomeokji.domain.dish.domain.Dish;
import com.umc.mwomeokji.global.entity.BaseEntity;

import javax.persistence.Column;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import java.util.List;

public class DishRandom extends BaseEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String name;



}
