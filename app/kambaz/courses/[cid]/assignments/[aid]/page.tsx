import AssignmentEditorForm from "./AssignmentEditorForm";

export default async function AssignmentEditor({
    params,
}: {
    params: Promise<{ cid: string; aid: string }>;
}) {
    const { cid, aid } = await params;
    return <AssignmentEditorForm cid={cid} aid={aid} />;
}
