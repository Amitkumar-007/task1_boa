package com.boa.Controller;

import java.util.ArrayList;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.boa.dto.ProductDTO;

@RestController
@RequestMapping("/api/v1")
public class ProductController {
	
	@GetMapping("/products")
	public ArrayList<ProductDTO> getProducts() {
		ArrayList<ProductDTO> arr = new ArrayList<>();
		ProductDTO p1 = new ProductDTO("Checking");
		ProductDTO p2 = new ProductDTO("Savings");
		ProductDTO p3 = new ProductDTO("Credit Cards");
		ProductDTO p4 = new ProductDTO("Home Loans");
		ProductDTO p5 = new ProductDTO("Auto Loans");
		ProductDTO p6 = new ProductDTO("Investing");
		ProductDTO p7 = new ProductDTO("Better Money Habits");
		arr.add(p1);
		arr.add(p2);
		arr.add(p3);
		arr.add(p4);
		arr.add(p5);
		arr.add(p6);
		arr.add(p7);
		return arr;
	}
}
