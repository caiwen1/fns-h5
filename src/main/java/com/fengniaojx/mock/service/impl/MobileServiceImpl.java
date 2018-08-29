package com.fengniaojx.mock.service.impl;

import java.util.HashMap;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.alibaba.fastjson.JSON;
import com.fengniaojx.common.httpclient.HttpClientComponent;
import com.fengniaojx.mock.Properties;
import com.fengniaojx.mock.domain.query.MobileQuery;
import com.fengniaojx.mock.domain.vo.MobileVO;
import com.fengniaojx.mock.service.MobileService;

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
