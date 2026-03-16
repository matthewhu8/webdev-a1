"use client";
import { useParams } from "next/navigation";
import AssignmentEditorForm from "./AssignmentEditorForm";

export default function AssignmentEditor() {
    const { cid, aid } = useParams();
    return <AssignmentEditorForm cid={cid as string} aid={aid as string} />;
}
