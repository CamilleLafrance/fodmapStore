package com.dai5.back.service.order;

import org.springframework.stereotype.Service;

@Service
public class LineProductService {

    // -- NOT TESTED --
    /*
    @Autowired
    private LineProductRepository lineProductRepository;

    public LineProduct updateLineProduct(Integer id, LineProduct lineProductDetails) {
        LineProduct lineProduct = lineProductRepository.findById(id).get();
        lineProduct.setOrder(lineProductDetails.getOrder());
        lineProduct.setProduct(lineProductDetails.getProduct());
        lineProduct.setQuantity(lineProductDetails.getQuantity());
        lineProduct.setUnitPrice(lineProductDetails.getUnitPrice());
        lineProduct.setDiscount(lineProductDetails.getDiscount());
        lineProduct.setTotalPrice(lineProductDetails.getTotalPrice());

        return lineProductRepository.save(lineProduct);
    }
    */
}
