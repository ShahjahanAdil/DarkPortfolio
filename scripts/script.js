document.addEventListener('DOMContentLoaded', () => {
    const headerToggleIcon = document.getElementById('header-toggle-icon')
    const headerSmall = document.getElementById('header-small')
    const headerSmallUl = document.getElementById('header-small-ul')

    let headerToggle = false

    function handleResize() {
        if (window.innerWidth > 767) {
            const icon = headerToggleIcon.querySelector('i');
            headerToggle = false

            icon.className = 'bx bx-menu fs-2';
            headerSmall.style.opacity = '0';
            headerSmall.style.transform = `translateY(30%)`;
        }
    }

    handleResize()

    window.addEventListener('resize', handleResize);

    headerToggleIcon.addEventListener('click', () => {
        const icon = headerToggleIcon.querySelector('i');
        icon.style.opacity = 0;

        setTimeout(() => {
            headerToggle = !headerToggle;

            icon.className = headerToggle ? 'bx bx-x fs-2' : 'bx bx-menu fs-2';
            icon.style.opacity = 1;

            headerSmall.style.opacity = headerToggle ? '1' : '0';
            headerSmall.style.transform = headerToggle ? `translateY(0%)` : `translateY(30%)`;
            headerSmallUl.style.opacity = headerToggle ? '1' : '0';
        }, 150);
    })

    let projects = [
        {
            projectimg: '../assets/images/web1.png',
            projectName: 'E-commerce App'
        },
        {
            projectimg: '../assets/images/web2.png',
            projectName: 'Restaurant App'
        },
        {
            projectimg: '../assets/images/web4.png',
            projectName: 'Smartphones App'
        },
        {
            projectimg: '../assets/images/web3.png',
            projectName: 'Gaming Site'
        },
        {
            projectimg: '../assets/images/web5.png',
            projectName: 'Fast Food Site'
        },
        {
            projectimg: '../assets/images/web6.png',
            projectName: 'Beauty Site'
        },
        {
            projectimg: '../assets/images/web8.png',
            projectName: 'Architects Site'
        },
        {
            projectimg: '../assets/images/web7.png',
            projectName: 'Landing Page'
        },
        {
            projectimg: '../assets/images/web9.png',
            projectName: 'Laptops Site'
        }
    ]

    let limit = 6;
    let limitedProjects = projects.slice(0, limit)

    const projectsGrid = document.getElementById('projects-grid')

    function updateProjectsGrid() {
        projectsGrid.innerHTML = limitedProjects.map((project) => {
            return (
                `
                <div class="project-box">
                    <img src=${project.projectimg} alt=${project.projectName}>
                    <div class="project-overlay">
                        <h5 class="text-center">${project.projectName}</h5>
                            <span class="d-flex gap-2 px-2">
                                <p class="mb-0">Open now</p> <i class="fi fi-tr-arrow-right mt-1"></i>
                            </span>
                    </div>
                    <div class="project-gradient"></div>
                </div>
                `
            );
        }).join('')
    }

    updateProjectsGrid()

    const seeMoreBtn = document.getElementById('see-more-btn')
    seeMoreBtn.addEventListener('click', () => {
        limit = projects.length
        limitedProjects = projects.slice(0, limit)
        updateProjectsGrid()
        
        if (limit == projects.length) {
            seeMoreBtn.style.display = 'none'
        }
    })
})