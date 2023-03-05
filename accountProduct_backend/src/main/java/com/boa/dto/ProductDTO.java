package com.boa.dto;

public class ProductDTO {
	private String productname;

	public ProductDTO(String productname) {
		super();
		this.productname = productname;
	}

	public String getProductname() {
		return productname;
	}

	public void setProductname(String productname) {
		this.productname = productname;
	}
}
