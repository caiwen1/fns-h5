package com.boot.mock.service.impl;

import java.util.HashMap;
import java.util.Map;

import com.boot.mock.domain.query.MobileQuery;
import com.boot.mock.service.MobileService;
import org.springframework.stereotype.Service;

import com.alibaba.fastjson.JSON;
import com.fengniaojx.common.httpclient.HttpClientComponent;
import com.boot.mock.domain.vo.MobileVO;

@Service(value = "mobileService")
public class MobileServiceImpl implements MobileService {

	@Override
	public  MobileVO getMobile(MobileQuery mobileQuery) throws Exception {
		Map<String, String> params = new HashMap<String, String>();
		params.put("key",mobileQuery.getKey());
		params.put("dtype",mobileQuery.getDtype());
		params.put("phone",mobileQuery.getPhone());
		Map<String, String> headers = new HashMap<String, String>();
		int retryTime = 3;
		Map<String, Object> result = HttpClientComponent.getResultMapByGet(mobileQuery.getUrl(), params, headers, retryTime);
		MobileVO outVO = new MobileVO();
		if(result == null) {
			return outVO;
		}
		return JSON.parseObject(JSON.toJSONString(result), MobileVO.class);
	}
}
