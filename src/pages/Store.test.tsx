import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Store from './Store';

// Mock components
vi.mock('@/components/Navbar', () => ({
  default: () => <div data-testid="navbar">Navbar Mock</div>,
}));

vi.mock('@/components/Footer', () => ({
  default: () => <div data-testid="footer">Footer Mock</div>,
}));

vi.mock('@/components/WhatsAppIcon', () => ({
  WhatsAppIcon: () => <svg data-testid="whatsapp-icon" />,
}));

describe('Store Component', () => {
  const renderStore = () => {
    render(
      <BrowserRouter>
        <Store />
      </BrowserRouter>
    );
  };

  it('renders without crashing', () => {
    renderStore();
    expect(screen.getByText('Muziclub Store')).toBeInTheDocument();
  });

  it('renders Navbar and Footer', () => {
    renderStore();
    expect(screen.getByTestId('navbar')).toBeInTheDocument();
    expect(screen.getByTestId('footer')).toBeInTheDocument();
  });

  it('renders hero title', () => {
    renderStore();
    expect(screen.getByText('Music Gear &')).toBeInTheDocument();
    expect(screen.getByText('Essentials')).toBeInTheDocument();
  });

  it('renders all categories initially', () => {
    renderStore();
    const categories = ["All", "Guitars", "Keyboards", "Drums", "Vocals", "Accessories", "Books & Scores"];
    categories.forEach(category => {
      expect(screen.getByRole('button', { name: category })).toBeInTheDocument();
    });
  });

  it('renders all products initially when "All" category is selected', () => {
    renderStore();
    // Check for some product names
    expect(screen.getByText('Yamaha F310 Acoustic Guitar')).toBeInTheDocument();
    expect(screen.getByText('Casio CT-S300 Keyboard')).toBeInTheDocument();
    expect(screen.getByText('Evans EQ4 Drumhead Pack')).toBeInTheDocument();
    
    // Total 8 products are in the mock data, but we just verify a few key ones.
    const allButtons = screen.getAllByRole('link'); // "Inquire" links
    // 8 products + Maybe Navbar has some links. Let's just check the "Inquire" text
    const inquireLinks = screen.getAllByText('Inquire');
    expect(inquireLinks.length).toBe(8);
  });

  it('filters products by category when a category button is clicked', () => {
    renderStore();
    
    // Click on "Guitars"
    fireEvent.click(screen.getByRole('button', { name: 'Guitars' }));
    
    // Only "Yamaha F310 Acoustic Guitar" should be visible
    expect(screen.getByText('Yamaha F310 Acoustic Guitar')).toBeInTheDocument();
    
    // "Casio CT-S300 Keyboard" should NOT be visible
    expect(screen.queryByText('Casio CT-S300 Keyboard')).not.toBeInTheDocument();
  });

  it('has correct whatsapp inquiry links', () => {
    renderStore();
    
    const productElement = screen.getByText('Yamaha F310 Acoustic Guitar').closest('div')?.parentElement;
    // The closest element to 'Yamaha F310 Acoustic Guitar' is the h3 tag. 
    // Just find the link that is inside the same card or just find the 'Inquire' link specifically for this.
    // We can also query all link tags.
    const guitarLink = screen.getAllByRole('link').find(link => link.getAttribute('href')?.includes(encodeURIComponent('Yamaha F310 Acoustic Guitar')));
    
    expect(guitarLink).toBeDefined();
    expect(guitarLink?.getAttribute('href')).toContain('919156303400');
  });
});
