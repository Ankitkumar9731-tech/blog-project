// Global variables
let allBlogs = [];
let currentPost = null;

// DOM Content Loaded
document.addEventListener("DOMContentLoaded", function () {
  allBlogs = blogsData; // From blogs.js
  initializePage();
});

// Initialize page based on current location
function initializePage() {
  const path = window.location.pathname;
  const page = path.substring(path.lastIndexOf("/") + 1);

  switch (page) {
    case "index.html":
    case "":
      loadFeaturedPosts();
      break;
    case "blog.html":
      loadAllPosts();
      setupSearchAndFilter();
      break;
    case "blog-post.html":
      loadBlogPost();
      break;
    case "contact.html":
      setupContactForm();
      break;
  }
}

// Load featured posts for homepage
function loadFeaturedPosts() {
  const featuredContainer = document.getElementById("featured-posts");
  if (!featuredContainer) return;

  const featuredPosts = allBlogs.slice(0, 3); // First 3 posts as featured
  featuredContainer.innerHTML = featuredPosts
    .map((post) => createPostCard(post))
    .join("");

  // Add click listeners
  featuredContainer.addEventListener("click", handlePostClick);
}

// Load all posts for blog page
function loadAllPosts() {
  const postsContainer = document.getElementById("all-posts");
  if (!postsContainer) return;

  postsContainer.innerHTML = allBlogs
    .map((post) => createPostCard(post))
    .join("");

  // Add click listeners
  postsContainer.addEventListener("click", handlePostClick);
}

// Create post card HTML
function createPostCard(post) {
  return `
        <div class="post-card" data-id="${post.id}">
            <img src="${post.image}" alt="${post.title}" class="post-image" loading="lazy">
            <div class="post-content">
                <span class="post-category">${post.category}</span>
                <h3 class="post-title">${post.title}</h3>
                <p class="post-excerpt">${post.excerpt}</p>
                <div class="post-meta">
                    <span class="post-author">By ${post.author}</span>
                    <span class="post-date">${post.date}</span>
                </div>
            </div>
        </div>
    `;
}

// Handle post card clicks
function handlePostClick(event) {
  const postCard = event.target.closest(".post-card");
  if (postCard) {
    const postId = parseInt(postCard.dataset.id);
    window.location.href = `blog-post.html?id=${postId}`;
  }
}

// Setup search and filter functionality
function setupSearchAndFilter() {
  const searchInput = document.getElementById("search-input");
  const categoryFilter = document.getElementById("category-filter");

  if (searchInput) {
    searchInput.addEventListener("input", filterPosts);
  }

  if (categoryFilter) {
    categoryFilter.addEventListener("change", filterPosts);
  }
}

// Filter posts based on search and category
function filterPosts() {
  const searchTerm = document
    .getElementById("search-input")
    .value.toLowerCase();
  const selectedCategory = document.getElementById("category-filter").value;

  let filteredPosts = allBlogs.filter((post) => {
    const matchesSearch =
      post.title.toLowerCase().includes(searchTerm) ||
      post.excerpt.toLowerCase().includes(searchTerm) ||
      post.content.toLowerCase().includes(searchTerm);

    const matchesCategory =
      selectedCategory === "" || post.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  const postsContainer = document.getElementById("all-posts");
  if (postsContainer) {
    postsContainer.innerHTML = filteredPosts
      .map((post) => createPostCard(post))
      .join("");

    if (filteredPosts.length === 0) {
      postsContainer.innerHTML =
        '<p class="text-center">No posts found matching your criteria.</p>';
    }
  }
}

// Load individual blog post
function loadBlogPost() {
  const urlParams = new URLSearchParams(window.location.search);
  const postId = parseInt(urlParams.get("id"));

  currentPost = allBlogs.find((post) => post.id === postId);

  if (!currentPost) {
    document.getElementById("blog-post-content").innerHTML =
      '<p class="text-center">Post not found.</p>';
    return;
  }

  // Update page title
  document.getElementById("post-title").textContent =
    currentPost.title + " - TechBlog";

  // Load post content
  const postContainer = document.getElementById("blog-post-content");
  postContainer.innerHTML = `
        <div class="container">
            <header class="post-header">
                <h1>${currentPost.title}</h1>
                <div class="post-header-meta">
                    <span class="post-category">${currentPost.category}</span>
                    <span class="post-author">By ${currentPost.author}</span>
                    <span class="post-date">${currentPost.date}</span>
                    <span class="post-read-time">${currentPost.readTime} min read</span>
                </div>
            </header>
            
            <img src="${currentPost.image}" alt="${currentPost.title}" class="post-featured-image">
            
            <div class="post-body">
                ${currentPost.content}
            </div>
        </div>
    `;

  // Load related posts
  loadRelatedPosts();
}

// Load related posts
function loadRelatedPosts() {
  if (!currentPost) return;

  const relatedContainer = document.getElementById("related-posts");
  if (!relatedContainer) return;

  const relatedPosts = allBlogs
    .filter(
      (post) =>
        post.id !== currentPost.id && post.category === currentPost.category
    )
    .slice(0, 3);

  if (relatedPosts.length > 0) {
    relatedContainer.innerHTML = relatedPosts
      .map((post) => createPostCard(post))
      .join("");
    relatedContainer.addEventListener("click", handlePostClick);
  } else {
    document.querySelector(".related-posts").style.display = "none";
  }
}

// Setup contact form
function setupContactForm() {
  const contactForm = document.getElementById("contact-form");
  if (!contactForm) return;

  contactForm.addEventListener("submit", function (e) {
    e.preventDefault();

    // Get form data
    const formData = {
      name: document.getElementById("name").value,
      email: document.getElementById("email").value,
      subject: document.getElementById("subject").value,
      message: document.getElementById("message").value,
    };

    // Simulate form submission
    alert("Thank you for your message! We'll get back to you soon.");
    contactForm.reset();
  });
}

// Utility function to format date
function formatDate(dateString) {
  const options = { year: "numeric", month: "long", day: "numeric" };
  return new Date(dateString).toLocaleDateString("en-US", options);
}

// Scroll to top function
function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}
