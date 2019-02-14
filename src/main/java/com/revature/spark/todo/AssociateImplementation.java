package com.revature.spark.todo;

import java.util.List;
import java.util.Map;

import com.revature.spark.beans.Product;
import com.revature.spark.beans.Warehouse;

/**
 * Within this class, you will implement the logic to calculate data for various
 * reports.
 * 
 * @author Your Name Here
 * 
 */
public class AssociateImplementation {

	/**
	 * Find the sum of all product assets. Remember that quantity times price is the
	 * total value for a given product.
	 * 
	 * @param products
	 * @return
	 */
	public Double sum(List<Product> products) {
		
		int listSize = products.size();
		double sum = 0;
		
		for (int i=0; i<listSize; i++) {
			sum += (products.get(i).getPrice() * products.get(i).getQuantity());
//			System.out.println(sum);
		}
		return sum;
	}

	/**
	 * Find the lowest product price out of all products.
	 * 
	 * @param products
	 * @return
	 */
	public Double min(List<Product> products) {
		int i = 0;
		int listSize = products.size();
		double holder = 2999999;
		while (i< listSize) {
			if (products.get(i).getPrice() < holder) {
				holder = (products.get(i).getPrice());
				System.out.print(holder);
				
			}
			i++;
		}
		return holder;	
	}

	/**
	 * Find the highest product price out of all products.
	 * 
	 * @param products
	 * @return
	 */
	public Double max(List<Product> products) {
		int i = 0;
		int listSize = products.size();
		double holder = 0;
		while (i< listSize) {
			if (products.get(i).getPrice() > holder) {
				holder = (products.get(i).getPrice());
				System.out.print(holder);
				
			}
			i++;
		}
		return holder;	
	}

	/**
	 * Find the average product price of all products.
	 * 
	 * @param products
	 * @return
	 */
	public Double avg(List<Product> products) {
		
		int listSize = products.size();
		double sum = 0;
		
		for (int i=0; i<listSize; i++) {
			sum += products.get(i).getPrice();
		}	
		return sum/listSize;
	}

	/**
	 * Find the median product price of all products.
	 * 
	 * @param products
	 * @return
	 */
	public Double median(List<Product> products) {
		double[] productsArray = new double[products.size()];
		double median = 0;
		
		for(int i=0; i<products.size(); i++) {
			productsArray[i] = products.get(i).getPrice();
		}
		//bubble sort products
		for(int i=0; i<productsArray.length-1; i++) {
			for(int j=0; j<productsArray.length-1-i; j++) {
				if(productsArray[j] > productsArray[j+1]) {
					double temp = productsArray[j];
					productsArray[j] = productsArray[j+1];
					productsArray[j+1] = temp;
				}
			}
		}
		//If even split in half and take the average if the two middle elements
		if(products.size()%2 == 0) {
			median = ((double)productsArray[products.size()/2] + (double)productsArray[((products.size()/2)-1)])/2;
		//if Odd, just take middle element
		} else {
			median = (double)productsArray[products.size()/2];
		}
		return median;
	}

	/**
	 * !! BONUS CHALLENGE REQUIREMENT !!
	 * 
	 * Find the total value of all products in each warehouse (total assets).
	 * 
	 * Let's look at some example data:
	 * 
	 * Warehouse A 
	 * Product 	| Price | Quantity 
	 * Rice 	| $3.40 | 8 
	 * Beans 	| $1.50 | 3
	 * ------------------------------------ 
	 * Warehouse B 
	 * Product 	| Price 	| Quantity
	 * TV 		| $50.25 	| 4 
	 * Speaker 	| $15.10 	| 6 
	 * -----------------------------------
	 * Result: 
	 * Warehouse A : $31.70 
	 * Warehouse B : $291.60
	 * 
	 * 
	 * @param products
	 * @return
	 */
	public Map<Warehouse, Double> totalAssetsPerWarehouse(List<Product> products) {
		return null;
	}

}
