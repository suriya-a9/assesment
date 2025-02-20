function selectOption(radioId, dropdownId) {
    document.getElementById(radioId).checked = true;

    document.querySelectorAll('.dropdowns').forEach(dropdown => {
        dropdown.style.display = 'none';
    });

    document.getElementById(dropdownId).style.display = 'flex';
}