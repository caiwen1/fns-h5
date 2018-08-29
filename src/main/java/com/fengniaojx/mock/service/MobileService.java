package com.fengniaojx.mock.service;

import com.fengniaojx.mock.domain.query.MobileQuery;
import com.fengniaojx.mock.domain.vo.MobileVO;

public interface MobileService {

	MobileVO getMobile(MobileQuery mobileQuery) throws Exception;
}
