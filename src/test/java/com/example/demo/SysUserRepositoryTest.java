package com.example.demo;

import com.cputech.modules.usermsg.model.SysRole;
import com.cputech.modules.usermsg.repository.SysRoleRepository;
import com.cputech.modules.usermsg.repository.SysUserRepository;
import com.cputech.modules.usermsg.service.CustomUserDetailsService;
import com.example.demo.repository.RecordRepository;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;

/**
 * Created by song on 2017/9/26.
 */
@RunWith(SpringJUnit4ClassRunner.class)
//@AutoConfigureMockMvc
@SpringBootTest(classes = {DemoApplication.class},webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
public class SysUserRepositoryTest {
    @Autowired
    CustomUserDetailsService customUserDetailsService;
    @Autowired
    SysRoleRepository sysRoleRepository;
    @Autowired
    SysUserRepository sysUserRepository;
    @Autowired
    RecordRepository recordRepository;
    @Test
    public void addRoles() throws Exception {
        SysRole sysRole = new SysRole();
        sysRole.setName("ROLE_ADMIN");
        sysRoleRepository.save(sysRole);
        sysRole = new SysRole();
        sysRole.setName("ROLE_USER");
        sysRoleRepository.save(sysRole);
    }
    @Test
    public void createAdminAndUser() throws Exception {
//        SysUser user = new SysUser();
//        user.setUsername("admin");
//        user.setPassword("123456");
//        List<SysRole> sysRoleList = new ArrayList<>();
//        sysRoleList.add(sysRoleRepository.findOne(1L));
//        sysRoleList.add(sysRoleRepository.findOne(2L));
//        user.setRoles(sysRoleList);
//        customUserDetailsService.create(user);
    }

    @Test
    public void createUsers() throws Exception {
//        SysUser user = new SysUser();
//        user.setUsername("宗建峰");
//        user.setPassword("15146082288");
//        List<SysRole> sysRoleList = new ArrayList<>();
//        sysRoleList.add(sysRoleRepository.findOne(2L));
//        user.setRoles(sysRoleList);
//        customUserDetailsService.create(user);
    }

    @Test
    public void createRecords() throws Exception {
//        Record record = new Record();
//        record.setId(1L);
//        record.setDescription("1111");
//        record.setOwner((SysUser) customUserDetailsService.loadUserByUsername("swl"));
//        recordRepository.save(record);
//
//        record = new Record();
//        record.setId(2L);
//        record.setDescription("2222");
//        record.setOwner((SysUser) customUserDetailsService.loadUserByUsername("swl2"));
//        recordRepository.save(record);

    }
    @Test
    public void readExcel() throws Exception {
//        File file = new File("/Users/huang/Desktop/上传名录.xlsx");
//        FileInputStream in = new FileInputStream(file);
//        List<List<Object>> bankListByExcel = ReadExcel.getBankListByExcel(in,"上传名录.xlsx");
//        in.close();
//        for (int i = 0; i < bankListByExcel.size(); i++) {
//            List<Object> lo = bankListByExcel.get(i);
//            System.out.println("联系人:"+lo.get(2).toString().trim()+"电话:"+lo.get(3).toString().trim());
//            //进行加密
//            SysUser user = new SysUser();
//            user.setUsername(lo.get(2).toString().trim());
//            user.setPassword(lo.get(3).toString().trim());
//            List<SysRole> sysRoleList = new ArrayList<>();
//            sysRoleList.add(sysRoleRepository.findOne(2L));
//            user.setRoles(sysRoleList);
//            customUserDetailsService.create(user);
//        }
//        in.close();
    }

}