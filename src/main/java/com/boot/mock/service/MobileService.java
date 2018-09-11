package com.boot.mock.service;

import com.boot.mock.domain.query.MobileQuery;
import com.boot.mock.domain.vo.MobileVO;

public interface MobileService {

	MobileVO getMobile(MobileQuery mobileQuery) throws Exception;
}
