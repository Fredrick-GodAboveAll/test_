const toggleSearch = (search, button) => {
    const searchBar = document.getElementById(search),
      searchButton = document.getElementById(button);
  
    searchButton.addEventListener('click', () => {
      searchBar.classList.toggle('show-search');
      const input = searchBar.querySelector('.search__input');
      input.focus();
    });
  };
  
  toggleSearch('search-bar', 'search-button');
  