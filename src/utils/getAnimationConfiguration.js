export default ({ from, to, physics, delay, isActive }) => ({
    ...to,
    from,
    reverse: !isActive,
    config: physics,
    delay: isActive ? delay : 0,
})
