document.addEventListener('DOMContentLoaded', () => {
    const members = document.querySelectorAll('.team-member');

    members.forEach(member => {
        member.addEventListener('mouseenter', () => {
            member.style.boxShadow = "0px 5px 15px rgba(0, 0, 0, 0.3)";
        });

        member.addEventListener('mouseleave', () => {
            member.style.boxShadow = "0px 2px 8px rgba(0, 0, 0, 0.1)";
        });
    });
});
