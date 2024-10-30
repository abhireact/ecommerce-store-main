import {Nav,NavLink} from "@/components/nav";
export const dynamic ="force-dynamic"

export default function AdminLayout({children}:Readonly<{children:React.ReactNode}>){
    return<> <Nav>
        <NavLink href="/admin">Dashboard</NavLink>
        <NavLink href="/admin/products">Products</NavLink>
        <NavLink href="/admin/users">Customers</NavLink>
        <NavLink href="/admin/order">Sales</NavLink>
    </Nav>
    <div className="container my-6">{children}</div></>
} 