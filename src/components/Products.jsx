import React, { useState } from 'react';
import '../styles/Products.scss';

// Product Data
const productData = {
    electricAce: {
        id: 'electric-ace',
        name: 'Electric Ace',
        subtitle: 'Two',
        price: 69.07,
        currency: 'NET/MONTH',
        colors: [
            {
                name: 'Black',
                value: '#000000',
                selected: true,
                images: [
                    'https://images.unsplash.com/photo-1571068316344-75bc76f77890?w=800&h=600&fit=crop',
                    'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop',
                    'https://images.unsplash.com/photo-1502744688674-c619d1586c9e?w=800&h=600&fit=crop'
                ]
            },
            {
                name: 'Gray',
                value: '#808080',
                selected: false,
                images: [
                    'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop&sat=-100',
                    'https://images.unsplash.com/photo-1571068316344-75bc76f77890?w=800&h=600&fit=crop&sat=-100',
                    'https://images.unsplash.com/photo-1502744688674-c619d1586c9e?w=800&h=600&fit=crop&sat=-100'
                ]
            },
            {
                name: 'Beige',
                value: '#D4C4A8',
                selected: false,
                images: [
                    'https://images.unsplash.com/photo-1502744688674-c619d1586c9e?w=800&h=600&fit=crop&sepia=80',
                    'https://images.unsplash.com/photo-1571068316344-75bc76f77890?w=800&h=600&fit=crop&sepia=80',
                    'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop&sepia=80'
                ]
            },
            {
                name: 'White',
                value: '#FFFFFF',
                selected: false,
                images: [
                    'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop&brightness=130',
                    'https://images.unsplash.com/photo-1502744688674-c619d1586c9e?w=800&h=600&fit=crop&brightness=130',
                    'https://images.unsplash.com/photo-1571068316344-75bc76f77890?w=800&h=600&fit=crop&brightness=130'
                ]
            }
        ]
    },
    electricIvy: {
        id: 'electric-ivy',
        name: 'Electric Ivy',
        subtitle: 'Two',
        price: 69.07,
        currency: 'NET/MONTH',
        colors: [
            {
                name: 'Black',
                value: '#000000',
                selected: true,
                images: [
                    'https://images.unsplash.com/photo-1544191696-15693072e645?w=800&h=600&fit=crop',
                    'https://images.unsplash.com/photo-1558694995-70f4eee2b3f4?w=800&h=600&fit=crop',
                    'https://images.unsplash.com/photo-1502744688674-c619d1586c9e?w=800&h=600&fit=crop'
                ]
            },
            {
                name: 'Gray',
                value: '#808080',
                selected: false,
                images: [
                    'https://images.unsplash.com/photo-1558694995-70f4eee2b3f4?w=800&h=600&fit=crop&sat=-100',
                    'https://images.unsplash.com/photo-1544191696-15693072e645?w=800&h=600&fit=crop&sat=-100',
                    'https://images.unsplash.com/photo-1502744688674-c619d1586c9e?w=800&h=600&fit=crop&sat=-100'
                ]
            },
            {
                name: 'Beige',
                value: '#D4C4A8',
                selected: false,
                images: [
                    'https://images.unsplash.com/photo-1502744688674-c619d1586c9e?w=800&h=600&fit=crop&sepia=80',
                    'https://images.unsplash.com/photo-1558694995-70f4eee2b3f4?w=800&h=600&fit=crop&sepia=80',
                    'https://images.unsplash.com/photo-1544191696-15693072e645?w=800&h=600&fit=crop&sepia=80'
                ]
            },
            {
                name: 'Rose Gold',
                value: '#E8C4A0',
                selected: false,
                images: [
                    'https://images.unsplash.com/photo-1544191696-15693072e645?w=800&h=600&fit=crop&hue=20&sat=50',
                    'https://images.unsplash.com/photo-1502744688674-c619d1586c9e?w=800&h=600&fit=crop&hue=20&sat=50',
                    'https://images.unsplash.com/photo-1558694995-70f4eee2b3f4?w=800&h=600&fit=crop&hue=20&sat=50'
                ]
            }
        ]
    }
};

const ProductCard = ({ productKey = 'electricAce' }) => {
    const product = productData[productKey];
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [selectedColor, setSelectedColor] = useState(
        product.colors.find(color => color.selected) || product.colors[0]
    );

    const currentImages = selectedColor.images;

    const nextImage = () => {
        setCurrentImageIndex((prev) =>
            prev === currentImages.length - 1 ? 0 : prev + 1
        );
    };

    const prevImage = () => {
        setCurrentImageIndex((prev) =>
            prev === 0 ? currentImages.length - 1 : prev - 1
        );
    };

    const selectColor = (color) => {
        setSelectedColor(color);
        setCurrentImageIndex(0);
    };

    return (
        <div className="product-card">
            {/* Header */}
            <div className="product-header">
                <div className="product-title">
                    <h2 className="product-name">{product.name}</h2>
                    <span className="product-subtitle">{product.subtitle}</span>
                </div>
                <div className="product-price">
                    <span className="price-amount">€{product.price.toFixed(2)}</span>
                    <span className="price-currency">{product.currency}</span>
                </div>
            </div>

            {/* Image Container */}
            <div className="product-image-container">
                <button className="nav-button prev" onClick={prevImage}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                        <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                </button>

                <div className="product-image">
                    <img
                        src={currentImages[currentImageIndex]}
                        alt={`${product.name} - ${selectedColor.name}`}
                        loading="lazy"
                    />
                </div>

                <button className="nav-button next" onClick={nextImage}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                        <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                </button>
            </div>

            {/* Color Selector */}
            <div className="color-selector">
                {product.colors.map((color, index) => (
                    <button
                        key={index}
                        className={`color-option ${selectedColor.name === color.name ? 'selected' : ''}`}
                        style={{ backgroundColor: color.value }}
                        onClick={() => selectColor(color)}
                        aria-label={`Select ${color.name} color`}
                    />
                ))}
            </div>
        </div>
    );
};

// Main component with horizontal layout
const ProductDemo = () => {
    return (
        <div className="product-demo">
            <div className="products-container">
                <ProductCard productKey="electricAce" />
                <ProductCard productKey="electricIvy" />
            </div>
        </div>
    );
};

export default ProductDemo;