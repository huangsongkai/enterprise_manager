package com.example.demo.model;

import lombok.Data;

import javax.persistence.*;
import java.util.Date;

/**
 * Created by huang on 2017/11/10.
 */
@Entity
@Data
public class BlackListDirectory implements NeedsOwner {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;
    /**
     * 企业名称
     */
    String enterpriseName;

    /**
     * 备注
     */
    String remark;

    /**
     * 权限
     */
    String username;
    @Column(columnDefinition = "TIMESTAMP")
    Date createTime;



}
