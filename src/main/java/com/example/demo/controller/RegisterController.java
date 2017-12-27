package com.example.demo.controller;

import com.cputech.modules.usermsg.model.SysRole;
import com.cputech.modules.usermsg.model.SysUser;
import com.cputech.modules.usermsg.repository.SysRoleRepository;
import com.cputech.modules.usermsg.repository.SysUserRepository;
import com.cputech.modules.usermsg.service.CustomUserDetailsService;
import com.example.demo.model.RegisterDTO;
import com.example.demo.repository.RecordRepository;
import com.example.demo.util.Result;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import javax.annotation.Resource;
import java.util.ArrayList;
import java.util.List;

@Controller
@CrossOrigin
public class RegisterController {
    @Resource
    CustomUserDetailsService customUserDetailsService;
    @Autowired
    SysRoleRepository sysRoleRepository;
    @Autowired
    SysUserRepository sysUserRepository;
    @Autowired
    RecordRepository recordRepository;


    @PostMapping("/register")
    @ResponseBody
    public Result register( @RequestBody  RegisterDTO registerDTO) {
        Result result = new Result();
        System.out.println("联系人:"+registerDTO+"电话:"+registerDTO);
        //进行加密
        SysUser user = new SysUser();
        user.setUsername(registerDTO.getUserName());
        user.setPassword(registerDTO.getPassWord());
        List<SysUser> sysUserList = sysUserRepository.findByUsername(registerDTO.getUserName());
        if (sysUserList.size() != 0){
            //return"用户已经被注册,请登录.";
            result.setFailed("用户已经被注册,请登录.");
        }
        List<SysRole> sysRoleList = new ArrayList<>();
        sysRoleList.add(sysRoleRepository.findOne(2L));
        user.setRoles(sysRoleList);
        customUserDetailsService.create(user);
        result.setFailed("注册成功,请登录.");
        //return"注册成功,请登录.";
        return result;
    }

    @GetMapping("/register")
    public String registerList() {

        return"user/register";
    }



}