// Toggle sections (Contact, Search, About Us)
document.getElementById('contactBtn').addEventListener('click', function () {
    toggleSection('contactSection');
  });
  
  document.getElementById('searchBtn').addEventListener('click', function () {
    toggleSection('searchSection');
  });
  
  document.getElementById('aboutBtn').addEventListener('click', function () {
    toggleSection('aboutSection');
  });
  
  // Function to toggle sections
  function toggleSection(sectionId) {
    const sections = document.querySelectorAll('div[id$="Section"]');
    sections.forEach(section => {
      if (section.id === sectionId) {
        section.classList.toggle('hidden');
      } else {
        section.classList.add('hidden');
      }
    });
  }
  
  // Blog image click to reveal full content
  const blogImages = document.querySelectorAll('.blogImage');
  blogImages.forEach(image => {
    image.addEventListener('click', function () {
      const fullContent = this.closest('.blog').querySelector('.blogFullContent');
      fullContent.classList.toggle('hidden');
    });
  });
  
  // Save Note
  function saveNote() {
    const note = document.getElementById('noteInput').value;
    alert("Note saved: " + note);
  }
  
  // Text Editor formatting functions
  function formatText(command) {
    document.execCommand(command, false, null);
  }
  
  // Insert Heading
  function insertHeading() {
    document.execCommand('formatBlock', false, '<h1>');
  }
  
  // Filter Blogs
  function filterBlogs(category) {
    const blogs = document.querySelectorAll('.blog');
    blogs.forEach(blog => {
      if (blog.dataset.category === category || category === 'all') {
        blog.style.display = 'block';
      } else {
        blog.style.display = 'none';
      }
    });
  }
  