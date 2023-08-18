
function handleIssueFormSubmission(event) {
    event.preventDefault(); // Prevents the default form submission
  
    // Retrieve the selected option
    var issueSelect = document.getElementById('myCombo');
    //var selectedOption = issueSelect.value;
    var selectedText = issueSelect.options[issueSelect.selectedIndex].text;
  
    // Redirect the user based on the selected option
    switch (selectedText) {
      case 'Anxiety':
        window.location.href = 'anxiety.html';
        break;
      case 'Addiction':
        window.location.href = 'addiction.html';
        break;
      case 'Anger':
        window.location.href = 'anger.html';
        break;
      case 'LGBT':
        window.location.href = 'LGBT.html';
      default:
        break;
    }
  }
    

  