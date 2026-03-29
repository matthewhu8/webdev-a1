"use client";
import { Nav, NavItem, NavLink } from "react-bootstrap";
import Link from "next/link";
import { usePathname } from "next/navigation";
export default function TOC() {
    const pathname = usePathname();
    return (
        <Nav variant="pills">
            <NavItem>
                <NavLink href="/Labs" as={Link} className={`nav-link ${pathname.endsWith("Labs") ? "active" : ""}`}>
                    Labs </NavLink> </NavItem>
            <NavItem>
                <NavLink href="/Labs/lab1" as={Link} className={`nav-link ${pathname.endsWith("lab1") ? "active" : ""}`}>
                    Lab 1 </NavLink> </NavItem>
            <NavItem>
                <NavLink href="/Labs/lab2" as={Link} className={`nav-link ${pathname.endsWith("lab2") ? "active" : ""}`}>
                    Lab 2 </NavLink> </NavItem>
            <NavItem>
                <NavLink href="/Labs/lab3" as={Link} className={`nav-link ${pathname.endsWith("lab3") ? "active" : ""}`}>
                    Lab 3 </NavLink> </NavItem>
            <NavItem>
                <NavLink href="/Labs/lab4" as={Link} className={`nav-link ${pathname.endsWith("lab4") ? "active" : ""}`}>
                    Lab 4 </NavLink> </NavItem>
            <NavItem>
                <NavLink href="/Labs/lab5" as={Link} className={`nav-link ${pathname.endsWith("lab5") ? "active" : ""}`}>
                    Lab 5 </NavLink> </NavItem>
            <NavItem>
                <NavLink href="/kambaz" as={Link}>
                    Kambaz </NavLink> </NavItem>
            <NavItem>
                <NavLink href="https://github.com/matthewhu8/webdev-node-rest-server" id="wd-node-server-github">Server GitHub</NavLink></NavItem>
            <NavItem>
                <NavLink href="https://webdev-node-rest-server.onrender.com" id="wd-node-server">Node Server</NavLink></NavItem>
            <NavItem>
                <NavLink href="https://github.com/matthewhu8/webdev-a1" id="wd-github">My GitHub</NavLink></NavItem>
        </Nav>
    );
}
