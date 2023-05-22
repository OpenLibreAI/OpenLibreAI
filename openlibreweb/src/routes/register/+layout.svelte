<script lang="ts">
	import { onMount } from 'svelte';
    import '../app.postcss';
	import { supabaseClient } from '../../lib/supabase';
	import { invalidateAll } from '$app/navigation';

    onMount(() => {
        const { 
            data: { subscription }
        } = supabaseClient.auth.onAuthStateChange(() => {
            invalidateAll();
        });

        return () => {
            subscription.unsubscribe();
        };
    });
</script>

<slot/>