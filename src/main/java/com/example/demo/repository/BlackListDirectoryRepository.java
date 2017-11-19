package com.example.demo.repository;

/**
 * Created by song on 2017/10/23.
 */

import com.example.demo.model.BlackListDirectory;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.repository.query.Param;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.CrossOrigin;

@CrossOrigin
@RepositoryRestResource
public interface BlackListDirectoryRepository extends BaseRepository<BlackListDirectory, Long> {
    @PreAuthorize("hasRole('ROLE_ADMIN') or #username == authentication?.name")
    public Page<BlackListDirectory> findByUsername(@Param("username") String username, Pageable pageable);
    @PreAuthorize("hasRole('ROLE_ADMIN') or #blackListDirectory.username == authentication?.name")
    public BlackListDirectory save(BlackListDirectory blackListDirectory);

//    spel
}