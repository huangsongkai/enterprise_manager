package com.example.demo.repository;

/**
 * Created by song on 2017/10/23.
 */

import com.example.demo.model.InputsDirectory;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.repository.query.Param;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.CrossOrigin;

@CrossOrigin
@RepositoryRestResource
public interface InputsDirectoryRepository extends BaseRepository<InputsDirectory, Long> {
    @PreAuthorize("hasRole('ROLE_ADMIN') or #username == authentication?.name")
    public Page<InputsDirectory> findByUsername(@Param("username") String username, Pageable pageable);
    @PreAuthorize("hasRole('ROLE_ADMIN') or #inputsDirectory.username == authentication?.name")
    public InputsDirectory save(InputsDirectory inputsDirectory);

//    spel
}