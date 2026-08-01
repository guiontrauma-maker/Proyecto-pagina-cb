import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import {
    FaHome,
    FaClipboardList,
    FaBriefcase,
    FaExclamationTriangle,
    FaEnvelope,
    FaCog,
    FaSignOutAlt,
    FaUserShield,
    FaSearch,
    FaPlus,
    FaCheck,
    FaTimes,
    FaEye,
} from "react-icons/fa";

import "../style/PanelAdministrador.css";


const API =
    import.meta.env.VITE_API_URL;

function PanelAdministrador() {

    const navigate = useNavigate();

    const token =
        localStorage.getItem(
            "ssm_admin_token"
        );


    const adminSaved =
        localStorage.getItem(
            "ssm_admin"
        );


    const admin =
        adminSaved
            ? JSON.parse(adminSaved)
            : null;


    const [section, setSection] =
        useState("dashboard");


    const [dashboard, setDashboard] =
        useState(null);


    const [evaluaciones, setEvaluaciones] =
        useState([]);


    const [casos, setCasos] =
        useState([]);


    const [advertencias, setAdvertencias] =
        useState([]);


    const [mensajes, setMensajes] =
        useState([]);


    const [loading, setLoading] =
        useState(true);


    const [error, setError] =
        useState("");


    const [search, setSearch] =
        useState("");


    const authHeaders = {
        Authorization:
            `Bearer ${token}`,

        "Content-Type":
            "application/json",
    };


    useEffect(() => {

        if (!token) {

            navigate(
                "/admin-login"
            );

            return;

        }

        loadAll();

    }, []);


    const loadAll = async () => {

        try {

            setLoading(true);

            await Promise.all([
                loadDashboard(),
                loadEvaluaciones(),
                loadCasos(),
                loadAdvertencias(),
                loadMensajes(),
            ]);

        } catch (error) {

            setError(
                error.message
            );

        } finally {

            setLoading(false);

        }

    };


    const loadDashboard = async () => {

        const response =
            await fetch(
                `${API}/admin/dashboard`,
                {
                    headers:
                        authHeaders,
                }
            );


        if (response.status === 401) {
            logout();
            return;
        }


        const data =
            await response.json();


        if (!response.ok) {
            throw new Error(
                data.message
            );
        }


        setDashboard(data);

    };


    const loadEvaluaciones = async () => {

        const response =
            await fetch(
                `${API}/admin/evaluaciones`,
                {
                    headers:
                        authHeaders,
                }
            );


        const data =
            await response.json();


        if (!response.ok) {
            throw new Error(
                data.message
            );
        }


        setEvaluaciones(data);

    };


    const loadCasos = async () => {

        const response =
            await fetch(
                `${API}/admin/casos`,
                {
                    headers:
                        authHeaders,
                }
            );


        const data =
            await response.json();


        if (!response.ok) {
            throw new Error(
                data.message
            );
        }


        setCasos(data);

    };


    const loadAdvertencias = async () => {

        const response =
            await fetch(
                `${API}/admin/advertencias`,
                {
                    headers:
                        authHeaders,
                }
            );


        const data =
            await response.json();


        if (!response.ok) {
            throw new Error(
                data.message
            );
        }


        setAdvertencias(data);

    };


    const loadMensajes = async () => {

        const response =
            await fetch(
                `${API}/admin/mensajes`,
                {
                    headers:
                        authHeaders,
                }
            );


        const data =
            await response.json();


        if (!response.ok) {
            throw new Error(
                data.message
            );
        }


        setMensajes(data);

    };


    const logout = () => {

        localStorage.removeItem(
            "ssm_admin_token"
        );

        localStorage.removeItem(
            "ssm_admin"
        );

        navigate(
            "/admin-login"
        );

    };


    const updateEvaluationStatus =
        async (
            id,
            status
        ) => {

            await fetch(
                `${API}/admin/evaluaciones/${id}`,
                {
                    method: "PUT",

                    headers:
                        authHeaders,

                    body:
                        JSON.stringify({
                            status,
                        }),
                }
            );

            loadAll();

        };


    const convertEvaluation =
        async (id) => {

            const response =
                await fetch(
                    `${API}/admin/evaluaciones/${id}/convertir`,
                    {
                        method: "POST",

                        headers:
                            authHeaders,
                    }
                );


            const data =
                await response.json();


            if (!response.ok) {

                alert(
                    data.message
                );

                return;

            }


            alert(
                `Caso ${data.caseNumber} creado correctamente.`
            );


            loadAll();

        };


    const updateCaseStatus =
        async (
            id,
            status
        ) => {

            await fetch(
                `${API}/admin/casos/${id}`,
                {
                    method: "PUT",

                    headers:
                        authHeaders,

                    body:
                        JSON.stringify({
                            status,
                        }),
                }
            );

            loadAll();

        };


    const markMessageRead =
        async (id) => {

            await fetch(
                `${API}/admin/mensajes/${id}/leido`,
                {
                    method: "PUT",

                    headers:
                        authHeaders,
                }
            );

            loadMensajes();

            loadDashboard();

        };


    const deleteMessage =
        async (id) => {

            if (
                !window.confirm(
                    "¿Eliminar este mensaje?"
                )
            ) {
                return;
            }


            await fetch(
                `${API}/admin/mensajes/${id}`,
                {
                    method: "DELETE",

                    headers:
                        authHeaders,
                }
            );


            loadMensajes();

            loadDashboard();

        };


    const filteredEvaluaciones =
        evaluaciones.filter(
            (item) =>
                item.fullName
                    .toLowerCase()
                    .includes(
                        search.toLowerCase()
                    ) ||

                item.email
                    .toLowerCase()
                    .includes(
                        search.toLowerCase()
                    ) ||

                item.fraudType
                    .toLowerCase()
                    .includes(
                        search.toLowerCase()
                    )
        );


    const filteredCasos =
        casos.filter(
            (item) =>
                item.fullName
                    .toLowerCase()
                    .includes(
                        search.toLowerCase()
                    ) ||

                item.caseNumber
                    .toLowerCase()
                    .includes(
                        search.toLowerCase()
                    ) ||

                item.fraudType
                    .toLowerCase()
                    .includes(
                        search.toLowerCase()
                    )
        );


    if (loading) {

        return (
            <div className="admin-loading">
                Cargando panel administrativo...
            </div>
        );

    }


    return (

        <div className="admin-panel">

            {/* SIDEBAR */}

            <aside className="admin-sidebar">

                <div className="admin-brand">

                    <strong>
                        SSM
                    </strong>

                    <span>
                        Administración
                    </span>

                </div>


                <nav className="admin-menu">

                    <button
                        className={
                            section === "dashboard"
                                ? "active"
                                : ""
                        }
                        onClick={() =>
                            setSection(
                                "dashboard"
                            )
                        }
                    >

                        <FaHome />

                        Dashboard

                    </button>


                    <button
                        className={
                            section === "evaluaciones"
                                ? "active"
                                : ""
                        }
                        onClick={() =>
                            setSection(
                                "evaluaciones"
                            )
                        }
                    >

                        <FaClipboardList />

                        Evaluaciones

                        {dashboard?.statistics
                            ?.evaluacionesPendientes > 0 && (

                            <span className="menu-count">

                                {
                                    dashboard
                                        .statistics
                                        .evaluacionesPendientes
                                }

                            </span>

                        )}

                    </button>


                    <button
                        className={
                            section === "casos"
                                ? "active"
                                : ""
                        }
                        onClick={() =>
                            setSection(
                                "casos"
                            )
                        }
                    >

                        <FaBriefcase />

                        Casos

                    </button>


                    <button
                        className={
                            section === "advertencias"
                                ? "active"
                                : ""
                        }
                        onClick={() =>
                            setSection(
                                "advertencias"
                            )
                        }
                    >

                        <FaExclamationTriangle />

                        Advertencias

                    </button>


                    <button
                        className={
                            section === "mensajes"
                                ? "active"
                                : ""
                        }
                        onClick={() =>
                            setSection(
                                "mensajes"
                            )
                        }
                    >

                        <FaEnvelope />

                        Mensajes

                        {dashboard?.statistics
                            ?.mensajesNoLeidos > 0 && (

                            <span className="menu-count">

                                {
                                    dashboard
                                        .statistics
                                        .mensajesNoLeidos
                                }

                            </span>

                        )}

                    </button>


                    <button
                        className={
                            section === "configuracion"
                                ? "active"
                                : ""
                        }
                        onClick={() =>
                            setSection(
                                "configuracion"
                            )
                        }
                    >

                        <FaCog />

                        Configuración

                    </button>

                </nav>


                <button
                    className="admin-logout"
                    onClick={logout}
                >

                    <FaSignOutAlt />

                    Cerrar sesión

                </button>

            </aside>


            {/* MAIN */}

            <main className="admin-main">

                <header className="admin-header">

                    <div>

                        <span>
                            Panel administrativo
                        </span>

                        <h1>
                            {section === "dashboard"
                                ? "Dashboard"
                                : section === "evaluaciones"
                                    ? "Evaluaciones"
                                    : section === "casos"
                                        ? "Casos"
                                        : section === "advertencias"
                                            ? "Advertencias"
                                            : section === "mensajes"
                                                ? "Mensajes"
                                                : "Configuración"
                            }
                        </h1>

                    </div>


                    <div className="admin-user">

                        <div className="admin-user-icon">
                            <FaUserShield />
                        </div>

                        <div>

                            <strong>
                                {admin?.name ||
                                    "Administrador"}
                            </strong>

                            <span>
                                Administrador
                            </span>

                        </div>

                    </div>

                </header>


                <div className="admin-content">

                    {error && (

                        <div className="admin-error">
                            {error}
                        </div>

                    )}


                    {/* =================================================
                        DASHBOARD
                    ================================================= */}

                    {section === "dashboard" && (

                        <>

                            <div className="admin-welcome">

                                <span>
                                    SSM
                                </span>

                                <h2>
                                    Bienvenido al panel administrativo
                                </h2>

                                <p>
                                    Desde aquí puedes administrar
                                    las evaluaciones, casos,
                                    advertencias y mensajes
                                    de la plataforma.
                                </p>

                            </div>


                            <div className="admin-stats">

                                <div className="admin-stat">

                                    <span>
                                        Evaluaciones
                                    </span>

                                    <strong>
                                        {
                                            dashboard
                                                ?.statistics
                                                ?.totalEvaluaciones ||
                                            0
                                        }
                                    </strong>

                                    <small>
                                        Solicitudes recibidas
                                    </small>

                                </div>


                                <div className="admin-stat">

                                    <span>
                                        Pendientes
                                    </span>

                                    <strong>
                                        {
                                            dashboard
                                                ?.statistics
                                                ?.evaluacionesPendientes ||
                                            0
                                        }
                                    </strong>

                                    <small>
                                        Requieren revisión
                                    </small>

                                </div>


                                <div className="admin-stat">

                                    <span>
                                        Casos
                                    </span>

                                    <strong>
                                        {
                                            dashboard
                                                ?.statistics
                                                ?.totalCasos ||
                                            0
                                        }
                                    </strong>

                                    <small>
                                        Casos registrados
                                    </small>

                                </div>


                                <div className="admin-stat">

                                    <span>
                                        En proceso
                                    </span>

                                    <strong>
                                        {
                                            dashboard
                                                ?.statistics
                                                ?.casosProceso ||
                                            0
                                        }
                                    </strong>

                                    <small>
                                        Casos activos
                                    </small>

                                </div>


                                <div className="admin-stat">

                                    <span>
                                        Finalizados
                                    </span>

                                    <strong>
                                        {
                                            dashboard
                                                ?.statistics
                                                ?.casosFinalizados ||
                                            0
                                        }
                                    </strong>

                                    <small>
                                        Casos terminados
                                    </small>

                                </div>


                                <div className="admin-stat">

                                    <span>
                                        Advertencias
                                    </span>

                                    <strong>
                                        {
                                            dashboard
                                                ?.statistics
                                                ?.totalAdvertencias ||
                                            0
                                        }
                                    </strong>

                                    <small>
                                        Registros publicados
                                    </small>

                                </div>

                            </div>


                            <section className="admin-card">

                                <div className="admin-card-title">

                                    <div>

                                        <span>
                                            Actividad
                                        </span>

                                        <h2>
                                            Evaluaciones recientes
                                        </h2>

                                    </div>


                                    <button
                                        onClick={() =>
                                            setSection(
                                                "evaluaciones"
                                            )
                                        }
                                    >
                                        Ver todas
                                    </button>

                                </div>


                                <div className="admin-table-wrap">

                                    <table className="admin-table">

                                        <thead>

                                            <tr>

                                                <th>
                                                    Solicitante
                                                </th>

                                                <th>
                                                    Tipo
                                                </th>

                                                <th>
                                                    Monto
                                                </th>

                                                <th>
                                                    Fecha
                                                </th>

                                                <th>
                                                    Estado
                                                </th>

                                            </tr>

                                        </thead>


                                        <tbody>

                                            {
                                                dashboard
                                                    ?.evaluacionesRecientes
                                                    ?.map(
                                                        (item) => (

                                                            <tr
                                                                key={
                                                                    item._id
                                                                }
                                                            >

                                                                <td>

                                                                    <strong>
                                                                        {
                                                                            item.fullName
                                                                        }
                                                                    </strong>

                                                                    <small>
                                                                        {
                                                                            item.email
                                                                        }
                                                                    </small>

                                                                </td>

                                                                <td>
                                                                    {
                                                                        item.fraudType
                                                                    }
                                                                </td>

                                                                <td>
                                                                    $
                                                                    {
                                                                        item.amount
                                                                    }
                                                                    {" "}
                                                                    {
                                                                        item.currency
                                                                    }
                                                                </td>

                                                                <td>
                                                                    {
                                                                        new Date(
                                                                            item.createdAt
                                                                        ).toLocaleDateString(
                                                                            "es-MX"
                                                                        )
                                                                    }
                                                                </td>

                                                                <td>

                                                                    <span
                                                                        className={`status ${item.status
                                                                            .toLowerCase()
                                                                            .replace(
                                                                                " ",
                                                                                "-"
                                                                            )}`}
                                                                    >
                                                                        {
                                                                            item.status
                                                                        }
                                                                    </span>

                                                                </td>

                                                            </tr>

                                                        )
                                                    )
                                            }

                                        </tbody>

                                    </table>

                                </div>

                            </section>

                        </>

                    )}


                    {/* =================================================
                        EVALUACIONES
                    ================================================= */}

                    {section === "evaluaciones" && (

                        <section className="admin-card">

                            <div className="admin-card-title">

                                <div>

                                    <span>
                                        Solicitudes
                                    </span>

                                    <h2>
                                        Evaluaciones recibidas
                                    </h2>

                                </div>

                                <div className="admin-search">

                                    <FaSearch />

                                    <input
                                        value={search}
                                        onChange={(event) =>
                                            setSearch(
                                                event.target.value
                                            )
                                        }
                                        placeholder="Buscar..."
                                    />

                                </div>

                            </div>


                            <div className="admin-table-wrap">

                                <table className="admin-table">

                                    <thead>

                                        <tr>

                                            <th>
                                                Cliente
                                            </th>

                                            <th>
                                                Teléfono
                                            </th>

                                            <th>
                                                Tipo
                                            </th>

                                            <th>
                                                Monto
                                            </th>

                                            <th>
                                                Fecha
                                            </th>

                                            <th>
                                                Estado
                                            </th>

                                            <th>
                                                Acciones
                                            </th>

                                        </tr>

                                    </thead>


                                    <tbody>

                                        {filteredEvaluaciones.map(
                                            (item) => (

                                                <tr
                                                    key={
                                                        item._id
                                                    }
                                                >

                                                    <td>

                                                        <strong>
                                                            {
                                                                item.fullName
                                                            }
                                                        </strong>

                                                        <small>
                                                            {
                                                                item.email
                                                            }
                                                        </small>

                                                    </td>


                                                    <td>
                                                        {
                                                            item.phone ||
                                                            "—"
                                                        }
                                                    </td>


                                                    <td>
                                                        {
                                                            item.fraudType
                                                        }
                                                    </td>


                                                    <td>
                                                        $
                                                        {
                                                            item.amount
                                                        }
                                                        {" "}
                                                        {
                                                            item.currency
                                                        }
                                                    </td>


                                                    <td>
                                                        {
                                                            new Date(
                                                                item.createdAt
                                                            ).toLocaleDateString(
                                                                "es-MX"
                                                            )
                                                        }
                                                    </td>


                                                    <td>

                                                        <select
                                                            value={
                                                                item.status
                                                            }
                                                            onChange={(
                                                                event
                                                            ) =>
                                                                updateEvaluationStatus(
                                                                    item._id,
                                                                    event
                                                                        .target
                                                                        .value
                                                                )
                                                            }
                                                        >

                                                            <option>
                                                                Pendiente
                                                            </option>

                                                            <option>
                                                                En revisión
                                                            </option>

                                                            <option>
                                                                Aprobada
                                                            </option>

                                                            <option>
                                                                Rechazada
                                                            </option>

                                                        </select>

                                                    </td>


                                                    <td>

                                                        <button
                                                            className="action-button green"
                                                            onClick={() =>
                                                                convertEvaluation(
                                                                    item._id
                                                                )
                                                            }
                                                            title="Convertir en caso"
                                                        >
                                                            <FaBriefcase />
                                                        </button>

                                                    </td>

                                                </tr>

                                            )
                                        )}

                                    </tbody>

                                </table>

                            </div>

                        </section>

                    )}


                    {/* =================================================
                        CASOS
                    ================================================= */}

                    {section === "casos" && (

                        <section className="admin-card">

                            <div className="admin-card-title">

                                <div>

                                    <span>
                                        Expedientes
                                    </span>

                                    <h2>
                                        Casos
                                    </h2>

                                </div>


                                <div className="admin-search">

                                    <FaSearch />

                                    <input
                                        value={search}
                                        onChange={(event) =>
                                            setSearch(
                                                event.target.value
                                            )
                                        }
                                        placeholder="Buscar caso..."
                                    />

                                </div>

                            </div>


                            <div className="admin-table-wrap">

                                <table className="admin-table">

                                    <thead>

                                        <tr>

                                            <th>
                                                Caso
                                            </th>

                                            <th>
                                                Cliente
                                            </th>

                                            <th>
                                                Tipo
                                            </th>

                                            <th>
                                                Monto
                                            </th>

                                            <th>
                                                Fecha
                                            </th>

                                            <th>
                                                Estado
                                            </th>

                                        </tr>

                                    </thead>


                                    <tbody>

                                        {filteredCasos.map(
                                            (item) => (

                                                <tr
                                                    key={
                                                        item._id
                                                    }
                                                >

                                                    <td>
                                                        <strong>
                                                            {
                                                                item.caseNumber
                                                            }
                                                        </strong>
                                                    </td>


                                                    <td>

                                                        <strong>
                                                            {
                                                                item.fullName
                                                            }
                                                        </strong>

                                                        <small>
                                                            {
                                                                item.email
                                                            }
                                                        </small>

                                                    </td>


                                                    <td>
                                                        {
                                                            item.fraudType
                                                        }
                                                    </td>


                                                    <td>
                                                        $
                                                        {
                                                            item.amount
                                                        }
                                                        {" "}
                                                        {
                                                            item.currency
                                                        }
                                                    </td>


                                                    <td>
                                                        {
                                                            new Date(
                                                                item.createdAt
                                                            ).toLocaleDateString(
                                                                "es-MX"
                                                            )
                                                        }
                                                    </td>


                                                    <td>

                                                        <select
                                                            value={
                                                                item.status
                                                            }
                                                            onChange={(
                                                                event
                                                            ) =>
                                                                updateCaseStatus(
                                                                    item._id,
                                                                    event
                                                                        .target
                                                                        .value
                                                                )
                                                            }
                                                        >

                                                            <option>
                                                                En revisión
                                                            </option>

                                                            <option>
                                                                En proceso
                                                            </option>

                                                            <option>
                                                                Finalizado
                                                            </option>

                                                            <option>
                                                                Rechazado
                                                            </option>

                                                        </select>

                                                    </td>

                                                </tr>

                                            )
                                        )}

                                    </tbody>

                                </table>

                            </div>

                        </section>

                    )}


                    {/* =================================================
                        ADVERTENCIAS
                    ================================================= */}

                    {section === "advertencias" && (

                        <section className="admin-card">

                            <div className="admin-card-title">

                                <div>

                                    <span>
                                        Lista Negra
                                    </span>

                                    <h2>
                                        Advertencias de brokers
                                    </h2>

                                </div>


                                <button className="admin-primary-button">

                                    <FaPlus />

                                    Nueva advertencia

                                </button>

                            </div>


                            <div className="admin-table-wrap">

                                <table className="admin-table">

                                    <thead>

                                        <tr>

                                            <th>
                                                Broker
                                            </th>

                                            <th>
                                                Sitio web
                                            </th>

                                            <th>
                                                País
                                            </th>

                                            <th>
                                                Motivo
                                            </th>

                                            <th>
                                                Fecha de reporte
                                            </th>

                                            <th>
                                                Estado
                                            </th>

                                        </tr>

                                    </thead>


                                    <tbody>

                                        {advertencias.map(
                                            (item) => (

                                                <tr
                                                    key={
                                                        item._id
                                                    }
                                                >

                                                    <td>
                                                        <strong>
                                                            {
                                                                item.brokerName
                                                            }
                                                        </strong>
                                                    </td>

                                                    <td>
                                                        {
                                                            item.website ||
                                                            "—"
                                                        }
                                                    </td>

                                                    <td>
                                                        {
                                                            item.country ||
                                                            "—"
                                                        }
                                                    </td>

                                                    <td>
                                                        {
                                                            item.reason
                                                        }
                                                    </td>

                                                    <td>
                                                        {
                                                            new Date(
                                                                item.reportDate
                                                            ).toLocaleDateString(
                                                                "es-MX"
                                                            )
                                                        }
                                                    </td>

                                                    <td>

                                                        <span className="status warning">
                                                            {
                                                                item.status
                                                            }
                                                        </span>

                                                    </td>

                                                </tr>

                                            )
                                        )}

                                    </tbody>

                                </table>

                            </div>

                        </section>

                    )}


                    {/* =================================================
                        MENSAJES
                    ================================================= */}

                    {section === "mensajes" && (

                        <section className="admin-card">

                            <div className="admin-card-title">

                                <div>

                                    <span>
                                        Contacto
                                    </span>

                                    <h2>
                                        Mensajes recibidos
                                    </h2>

                                </div>

                            </div>


                            <div className="admin-messages">

                                {mensajes.length === 0 ? (

                                    <p className="empty-state">
                                        No hay mensajes.
                                    </p>

                                ) : (

                                    mensajes.map(
                                        (item) => (

                                            <article
                                                className={
                                                    item.read
                                                        ? "message-item"
                                                        : "message-item unread"
                                                }
                                                key={
                                                    item._id
                                                }
                                            >

                                                <div className="message-icon">
                                                    <FaEnvelope />
                                                </div>


                                                <div className="message-content">

                                                    <div className="message-top">

                                                        <strong>
                                                            {
                                                                item.name
                                                            }
                                                        </strong>

                                                        <span>
                                                            {
                                                                new Date(
                                                                    item.createdAt
                                                                ).toLocaleDateString(
                                                                    "es-MX"
                                                                )
                                                            }
                                                        </span>

                                                    </div>


                                                    <small>
                                                        {
                                                            item.email
                                                        }
                                                    </small>


                                                    <h3>
                                                        {
                                                            item.subject ||
                                                            "Sin asunto"
                                                        }
                                                    </h3>


                                                    <p>
                                                        {
                                                            item.message
                                                        }
                                                    </p>


                                                    <div className="message-actions">

                                                        {!item.read && (

                                                            <button
                                                                onClick={() =>
                                                                    markMessageRead(
                                                                        item._id
                                                                    )
                                                                }
                                                            >

                                                                <FaCheck />

                                                                Marcar leído

                                                            </button>

                                                        )}


                                                        <button
                                                            className="delete-button"
                                                            onClick={() =>
                                                                deleteMessage(
                                                                    item._id
                                                                )
                                                            }
                                                        >

                                                            <FaTimes />

                                                            Eliminar

                                                        </button>

                                                    </div>

                                                </div>

                                            </article>

                                        )
                                    )

                                )}

                            </div>

                        </section>

                    )}


                    {/* =================================================
                        CONFIGURACIÓN
                    ================================================= */}

                    {section === "configuracion" && (

                        <section className="admin-card">

                            <div className="admin-card-title">

                                <div>

                                    <span>
                                        Cuenta
                                    </span>

                                    <h2>
                                        Configuración
                                    </h2>

                                </div>

                            </div>


                            <div className="admin-profile-card">

                                <div className="large-admin-icon">
                                    <FaUserShield />
                                </div>


                                <div>

                                    <h3>
                                        {
                                            admin?.name ||
                                            "Administrador"
                                        }
                                    </h3>

                                    <p>
                                        {
                                            admin?.email ||
                                            ""
                                        }
                                    </p>

                                    <span>
                                        Cuenta de administrador
                                    </span>

                                </div>

                            </div>

                        </section>

                    )}

                </div>

            </main>

        </div>

    );

}


export default PanelAdministrador;