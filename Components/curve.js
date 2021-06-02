import css from '../styles/curve.module.css'
import { useEffect } from 'react';

export default function Curve(props) {
    const points = [
        { X: 50, Y: 500 },
        { X: 650, Y: 325 },
        { X: 1150, Y: 80 }
    ]
    const handles = [
        { X: 300, Y: 520 },
        { X: 430, Y: 500 },
        { X: 900, Y: 110 },
        { X: 1000, Y: 110 }
    ]
    const circles = [
        { X: 150, Y: 505 },
        { X: 450, Y: 455 },
        { X: 750, Y: 245 },
        { X: 1050, Y: 100 }
    ]
    const regions = [
        { X: 80, Y: 475, W: 145, H: 90, name: "Informational" },
        { X: 385, Y: 425, W: 125, H: 90, name: "Digitalized" },
        { X: 690, Y: 220, W: 118, H: 90, name: "Integrated" },
        { X: 985, Y: 70, W: 120, H: 90, name: "Automated" },
    ]

    function drawShape(ctx) {
        ctx.beginPath()
        ctx.lineWidth = 8
        ctx.lineCap = 'round'
        ctx.moveTo(points[0].X, points[0].Y)
        curveTo(ctx, handles[0], handles[1], points[1])
        curveTo(ctx, handles[2], handles[3], points[2])

        var gradient = ctx.createLinearGradient(0, 0, 1200, 0)
        gradient.addColorStop("0", "#4A7BB9")
        gradient.addColorStop("0.9", "#5F3DC4")
        gradient.addColorStop("1.0", "#603FC4")

        ctx.strokeStyle = gradient
        ctx.stroke()

        clearCircle(ctx, circles[0], "Informational", '#4A7BB9')
        clearCircle(ctx, circles[1], "Digitalized", "#4A7BB9")
        clearCircle(ctx, circles[2], "Integrated", "#603FC4")
        clearCircle(ctx, circles[3], "Automated", "#603FC4")
    }

    function clearCircle(ctx, point, text, color) {
        const radius = 30;
        const { X, Y } = point;
        ctx.lineWidth = 13;
        ctx.save();
        ctx.beginPath();
        ctx.arc(X, Y, radius, 0, 2 * Math.PI, true);
        ctx.clip();
        ctx.clearRect(X - radius, Y - radius, radius * 2, radius * 2);
        ctx.restore();
        ctx.beginPath()
        ctx.arc(X, Y, radius - 8, 0, 2 * Math.PI, true)
        ctx.strokeStyle = color
        ctx.stroke()
        ctx.font = "300 22px arial"
        ctx.beginPath()
        ctx.fillText(text, point.X - (ctx.measureText(text).width / 2), point.Y + 60)
        ctx.stroke()
    }

    function curveTo(ctx, h1, h2, point) {
        ctx.bezierCurveTo(h1.X, h1.Y, h2.X, h2.Y, point.X, point.Y)
    }

    function getRegion(p) {
        let res = -1;
        for (const v of regions) {
            if (p.X > v.X && p.X < v.X + v.W && p.Y > v.Y && p.Y < v.Y + v.H)
                res = v
        }
        return res
    }

    useEffect(() => {
        const conv = document.getElementById("curve_canvas_id")
        const ctx = conv.getContext("2d")
        drawShape(ctx)
        conv.addEventListener("click", e => {
            const bounds = conv.getBoundingClientRect()
            let x = e.pageX - bounds.left - scrollX
            let y = e.pageY - bounds.top - scrollY
            x /= bounds.width
            y /= bounds.height
            x *= conv.width
            y *= conv.height

            let ind = getRegion({ X: x, Y: y })
            if (ind != -1 && props.onClick)
                props.onClick(ind)

        })
        conv.addEventListener("mousemove", e => {
            const bounds = conv.getBoundingClientRect()
            let x = e.pageX - bounds.left - scrollX
            let y = e.pageY - bounds.top - scrollY
            x /= bounds.width
            y /= bounds.height
            x *= conv.width
            y *= conv.height

            if (getRegion({ X: x, Y: y }) != -1)
                conv.className = `${css.active} ${css.canvas}`
            else
                conv.className = css.canvas

        })
    }, [])

    return (<canvas className={css.canvas} width="1200" height="600" id="curve_canvas_id"></canvas>)
}